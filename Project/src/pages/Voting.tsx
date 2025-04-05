
import React, { useState } from 'react';
import { Check, Clock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data for active polls
const pollsData = [
  {
    id: 1,
    title: 'Choose the Upcomming Carnival Artist',
    description: 'Vote for which artist you want to perform at this year\'s homecoming concert.',
    deadline: '2025-09-30',
    status: 'active',
    options: [
      { id: 101, name: 'Durgesh Thapa', votes: 245 },
      { id: 102, name: 'Sajan Rai', votes: 198 },
      { id: 103, name: 'V Ten', votes: 210 },
      { id: 104, name: 'John Rai', votes: 187 },
    ],
    userVoted: null,
  },
  {
    id: 2,
    title: 'Student Representative Election',
    description: 'Vote for your preferred candidate for STAR.',
    deadline: '2023-09-25',
    status: 'active',
    options: [
      { id: 201, name: 'Abin Shakya', votes: 156 },
      { id: 202, name: 'Susmarika Koirala', votes: 143 },
      { id: 203, name: 'Aditya Karki', votes: 125 },
    ],
    userVoted: null,
  },
  {
    id: 3,
    title: 'Newyear Fest Theme Selection',
    description: 'Help us choose the theme for new year\'s  Fest.',
    deadline: '2023-09-20',
    status: 'active',
    options: [
      { id: 301, name: 'Retro 80s Night', votes: 178 },
      { id: 302, name: 'Sci-Fi Spectacular', votes: 142 },
      { id: 303, name: 'Enchanted Garden', votes: 156 },
      { id: 304, name: 'Carnival Extravaganza', votes: 164 },
    ],
    userVoted: null,
  },
  {
    id: 4,
    title: 'Cafeteria Menu Addition',
    description: 'Vote for a new food option to be added to the cafeteria menu.',
    deadline: '2023-09-18',
    status: 'active',
    options: [
      { id: 401, name: 'Sushi Bar', votes: 98 },
      { id: 402, name: 'Authentic Italian Pizza', votes: 112 },
      { id: 403, name: 'Build-Your-Own Burger Station', votes: 134 },
      { id: 404, name: 'Vegan Food Station', votes: 87 },
    ],
    userVoted: null,
  },
];

const Voting = () => {
  const [polls, setPolls] = useState(pollsData);
  const [activePoll, setActivePoll] = useState<null | typeof polls[0]>(null);
  const { toast } = useToast();
  
  const handleVote = (pollId: number, optionId: number) => {
    setPolls(prevPolls => {
      return prevPolls.map(poll => {
        if (poll.id === pollId) {
          const updatedOptions = poll.options.map(option => {
            if (option.id === optionId) {
              return { ...option, votes: option.votes + 1 };
            }
            return option;
          });
          
          return { ...poll, options: updatedOptions, userVoted: optionId };
        }
        return poll;
      });
    });
    
    // If the active poll is the one voted on, update it
    if (activePoll && activePoll.id === pollId) {
      setActivePoll(polls.find(poll => poll.id === pollId) || null);
    }
    
    // Show success message
    toast({
      title: "Vote recorded!",
      description: "Your vote has been successfully submitted.",
    });
  };
  
  const getTotalVotes = (poll: typeof polls[0]) => {
    return poll.options.reduce((sum, option) => sum + option.votes, 0);
  };
  
  const getPercentage = (votes: number, total: number) => {
    return total > 0 ? Math.round((votes / total) * 100) : 0;
  };
  
  const handleSelectPoll = (poll: typeof polls[0]) => {
    setActivePoll(poll);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Campus Voting System</h1>
        <p className="text-gray-600 mt-2">Make your voice heard by participating in campus polls and elections</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Polls List */}
        <div className="lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Active Polls</h2>
          
          <div className="space-y-4">
            {polls.map(poll => (
              <div 
                key={poll.id} 
                className={`border rounded-lg p-4 cursor-pointer transition ${
                  activePoll?.id === poll.id 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                }`}
                onClick={() => handleSelectPoll(poll)}
              >
                <h3 className="font-medium text-gray-800">{poll.title}</h3>
                <div className="flex items-center mt-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-gray-500">Deadline: {poll.deadline}</span>
                </div>
                {poll.userVoted && (
                  <div className="flex items-center mt-2 text-sm text-green-600">
                    <Check className="h-4 w-4 mr-1" />
                    <span>You've voted</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Active Poll Detail */}
        <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6">
          {activePoll ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{activePoll.title}</h2>
              <p className="text-gray-600 mb-6">{activePoll.description}</p>
              
              <div className="flex items-center mb-6 text-sm">
                <Clock className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-gray-500">Deadline: {activePoll.deadline}</span>
              </div>
              
              <div className="space-y-4">
                {activePoll.options.map(option => {
                  const totalVotes = getTotalVotes(activePoll);
                  const percentage = getPercentage(option.votes, totalVotes);
                  
                  return (
                    <div key={option.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{option.name}</span>
                        <span className="text-sm text-gray-500">{option.votes} votes ({percentage}%)</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            activePoll.userVoted === option.id ? 'bg-green-500' : 'bg-indigo-500'
                          }`}
                          style={{width: `${percentage}%`}}
                        ></div>
                      </div>
                      
                      {!activePoll.userVoted && (
                        <button
                          onClick={() => handleVote(activePoll.id, option.id)}
                          className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Vote
                        </button>
                      )}
                      
                      {activePoll.userVoted === option.id && (
                        <div className="mt-3 inline-flex items-center text-sm text-green-600">
                          <Check className="h-4 w-4 mr-1" />
                          <span>Your vote</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {activePoll.userVoted && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-md flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-yellow-800">You've already voted</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      You can only vote once per poll. Your vote has been recorded.
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-gray-500 text-lg">Select a poll from the list to view details</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Voting;
