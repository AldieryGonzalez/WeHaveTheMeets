
const FindMeet = () => {
    return (
        <div className="flex flex-col item-center text-center">
            <h1 className="text-2xl font-semibold space-y-2 m-10">
                what's your code?
            </h1>
            <br></br>
            <input className="flex text-center" placeholder="enter it here">
            </input>
            <div>
                <button className="bg-slate-300 rounded px-2 py-1">
                    Find Meet
                </button>
            </div>
        </div>

    );
};

export default FindMeet;
