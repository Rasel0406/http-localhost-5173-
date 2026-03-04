import React, { use } from 'react';

const Main_section = ({ fetchDataResult }) => {
    const ticketData = use(fetchDataResult)
    console.log(ticketData);
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Side - Customer Tickets (2/3 width) */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Customer Tickets</h2>

                    {/* Cards Grid - 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Single Ticket Card */}


                        {
                            ticketData.map(ticket => (
                                <div className="bg-white border-2  border-white rounded-lg p-6 shadow-xl">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-base">{ticket.title}</h3>
                                        <div>
                                            <span className={`${ticket.status === 'Open' ? 'bg-[#B9F8CF] text-[#0B5E06]' : 'bg-[#FEF3C7] text-[#92400E]'} text-md font-bold px-6 py-2 rounded-full flex items-center gap-2`}>
                                                <span className={`w-4 h-4 ${ticket.status === 'Open' ? 'bg-[#02A53B]' : 'bg-[#F59E0B]'} rounded-full`}></span>
                                                {ticket.status}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>
                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                        <div className="font-semibold">
                                            <span className="text-gray-600 ">#100{ticket.id}</span>
                                            <span className={`ml-6 ${ticket.priority === 'High' ? 'text-red-600' :
                                                    ticket.priority === 'Medium' ? 'text-[#FEBB0C]' :
                                                        'text-[#02A53B]'
                                                }`}>
                                                {ticket.priority.toUpperCase()} PRIORITY
                                            </span>

                                        </div>
                                        <div className="flex space-x-4 font-semibold">
                                            <span>{ticket.customer}</span>
                                            <span>{ticket.createdAt}</span>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Right Side - Task Status (1/3 width) */}
                <div className="lg:col-span-1 ml-10">
                    <h2 className="text-2xl font-bold mb-6">Task Status</h2>
                    {/* Task list */}
                </div>
            </div>
        </div>

    );
};

export default Main_section;