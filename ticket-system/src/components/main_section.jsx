import React, { use } from 'react';

const Main_section = ({ 
    fetchDataResult, 
    inProgressTickets, 
    resolvedTickets, 
    addToInProgress, 
    moveToResolved 
}) => {
    const ticketData = use(fetchDataResult);
  
    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Side - Customer Tickets  */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Customer Tickets</h2>

                    {/* Cards Grid - 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Single Ticket Card */}


                        {
                            ticketData.map(ticket => {
                                // Check: Eita ki Task Status e ache?
                                const isInProgress = inProgressTickets.find(t => t.id === ticket.id);
                                const currentStatus = isInProgress ? 'In-Progress' : ticket.status;
                                
                                return (
                                <div 
                                    key={ticket.id}
                                    onClick={() => addToInProgress(ticket)}
                                    className="bg-white border-2 border-white rounded-lg p-6 shadow-xl cursor-pointer hover:shadow-2xl hover:border-blue-300 transition"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-base">{ticket.title}</h3>
                                        <div>
                                            <span className={`${currentStatus === 'Open' ? 'bg-[#B9F8CF] text-[#0B5E06]' : 'bg-[#FEF3C7] text-[#92400E]'} text-md font-bold px-6 py-2 rounded-full flex items-center gap-2`}>
                                                <span className={`w-4 h-4 ${currentStatus === 'Open' ? 'bg-[#02A53B]' : 'bg-[#F59E0B]'} rounded-full`}></span>
                                                {currentStatus}
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
                                );
                            })
                        }
                    </div>
                </div>

                {/* Right Side - Task Status (1/3 width) */}
                <div className="lg:col-span-1">
                    {/* Task Status Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold mb-2 text-[#34485a]">Task Status</h2>
                        
                        {inProgressTickets.length === 0 ? (
                            <p className="text-[#627382] text-sm">Select a ticket to add to Task Status</p>
                        ) : (
                            <div className="space-y-4 mt-4">
                                {inProgressTickets.map(ticket => (
                                    <div key={ticket.id} className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md">
                                        <h3 className="font-bold text-base mb-3 text-gray-800">{ticket.title}</h3>
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                moveToResolved(ticket.id);
                                            }}
                                            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition"
                                        >
                                            Complete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Resolved Task Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-[#34485a]">Resolved Task</h2>
                        {resolvedTickets.length === 0 ? (
                            <p className="text-[#627382] text-sm">No resolved tasks yet.</p>
                        ) : (
                            <div className="space-y-3 mt-4">
                                {resolvedTickets.map(ticket => (
                                    <div key={ticket.id} className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                                        <p className="text-gray-800 font-semibold">{ticket.title}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main_section;