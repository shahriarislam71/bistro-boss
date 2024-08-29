import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('Access-token')
    const { data: status = {}, refetch } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/admin-stats', {
                headers: {
                    'authorization': `bearer ${token}`
                }
            })
            return data.json()
        }
    })
    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/order-stats', {
                headers: {
                    'authorization': `bearer ${token}`
                }
            })
            return data.json()
        }
    })
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    //For pieChart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className='w-full '>
            <h1 className='text-2xl font-bold text-center mb-5'>Admin : {user.displayName}</h1>
            <div className="grid grid-cols-4 gap-5 mx-[24px]">
                <div className="bg-orange-600 text-center p-[35px] rounded text-white">
                    <h1>{status.revenew}</h1>
                    <p>Revenew</p>
                </div>
                <div className="bg-orange-600 text-center p-[35px] rounded text-white">
                    <h1>{status.user}</h1>
                    <p>Customers</p>
                </div>
                <div className="bg-orange-600 text-center p-[35px] rounded text-white">
                    <h1>{status.totalMenu}</h1>
                    <p>Product</p>
                </div>
                <div className="bg-orange-600 text-center p-[35px] rounded text-white">
                    <h1>{status.order}</h1>
                    <p>Orders</p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 mt-10 gap-3 items-center'>
                <div className='w-3/4 lg:w-full flex items-center justify-between'>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="totalAmount" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className='w-3/4 flex items-center justify-between lg:w-full h-[500px]'>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="count"
                        >
                            {chartData.map((entry, index) => (
                                <Cell name={entry.category} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;