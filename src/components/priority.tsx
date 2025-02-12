const Priority = ({ priority, className }: { priority: string; className?: string }) => {
     const backgroundColor = priority === 'high' ? "bg-red-500" : priority === 'medium' ? "bg-yellow-500" : "bg-green-500";
     return (
          <div className={`${backgroundColor} text-xs ${className} rounded-sm px-1.5 py-1 text-white`}>
               {priority}
          </div>
     );
};

export default Priority