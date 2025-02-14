import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <ReactLoading type="spin" color="white" height={100} width={100} />
        </div>
    )
}

export default Loading