function Clock() {
    const Data = new Date();
  
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    const fecha = Data.toLocaleDateString("es-ES", options);
  
    return <div className="text-xs h-auto 3xl:text-xl">{fecha}</div>;
  }
  
  export default Clock;