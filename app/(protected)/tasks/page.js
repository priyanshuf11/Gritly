
export default function Tasks() {
  

  return (
    <div className='flex'>

        <div className='column'>
          <p>tasks</p>
          <h2>Todo</h2>
          <section className='tasks'></section>
        </div>

        <div className='column'>
          <h2>In progress</h2>
          <section className='tasks'></section>
        </div>
        
        <div className='column'>
          <h2>Dones</h2>
          <section className='tasks'></section>
        </div>

       </div>
  );
}
