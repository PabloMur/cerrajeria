const AttentionStatus = () => {
    return (<div className="bg-black text-white px-2 pr-3 py-1 rounded-full text-sm flex  items-center gap-2 cursor-pointer">
        <p>Técnicos disponibles</p>
        <div className="bg-green-400 h-[10px] w-[10px] rounded-full animate-pulse"></div>
    </div>)
}

export default AttentionStatus;