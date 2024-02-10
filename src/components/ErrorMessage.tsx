const ErrorMessage = ({ message }: { message: string }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="text-xl px-5 py-1.5 text-red-800 border border-red-300 rounded-lg bg-red-50">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
