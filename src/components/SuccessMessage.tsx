const SuccessMessage = ({ message }: { message: string }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="text-xl px-5 py-1.5 text-green-800 border border-green-300 rounded-lg bg-green-50">
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessage;
