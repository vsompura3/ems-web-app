const LoginPanel = ({
  handleSubmit,
  isLoading,
  registrationNumber,
  setRegistrationNumber,
  password,
  setPassword,
}) => {
  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="registrationNumber"
          className="block text-lg font-medium leading-6 text-slate-900 "
        >
          Registration Number
        </label>
        <div className="mt-2">
          <input
            id="registrationNumber"
            name="registrationNumber"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            required
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="block w-full appearance-none rounded-md px-4 py-2.5 text-lg font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand   sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-lg font-medium leading-6 text-slate-900 "
        >
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full appearance-none rounded-md px-4 py-2.5 text-lg font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand   sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button
        className="flex items-center justify-center gap-2 rounded-md bg-slate-900 py-3 font-semibold text-white disabled:bg-black/75 disabled:cursor-not-allowed"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <div
              aria-hidden={true}
              className="h-5 w-5 animate-spin rounded-full border-4 border-brand border-r-white"
            ></div>
            {"Signing In..."}
          </>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
};

export default LoginPanel;
