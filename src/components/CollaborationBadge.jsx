const CollaborationBadge = ({ status }) => {
    const statusConfig = {
      open: {
        text: "Open for Collaboration",
        bg: "bg-blue-100",
        textColor: "text-blue-800",
        border: "border-blue-300"
      },
      closed: {
        text: "Collaboration Closed",
        bg: "bg-gray-100",
        textColor: "text-gray-800",
        border: "border-gray-300"
      }
    };
  
    const config = statusConfig[status] || statusConfig.closed;
  
    return (
      <div className={`px-2.5 py-1 rounded-full text-xs font-medium border ${config.bg} ${config.textColor} ${config.border}`}>
        {config.text}
      </div>
    );
  };
  
  export default CollaborationBadge;