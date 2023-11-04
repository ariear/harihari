export default function TaskListLoading() {
    return (
        <div className="flex justify-center xl:justify-between items-start flex-wrap w-full">
            <div className='bg-white p-3 rounded-xl border shadow-md w-[380px] transition-transform m-2 xl:m-0 animate-pulse'>
                <div className='flex items-center mb-4'>
                    <div className='w-6 h-6 rounded-lg mr-3 bg-gray-300 animate-pulse'></div>
                    <p className='font-semibold w-14 h-3 bg-gray-300 animate-pulse rounded-lg'></p>
                </div>
                <div>
                    <div className="w-full h-40 bg-gray-300 animate-pulse rounded-lg mb-3"></div>
                    <div className="w-full h-12 bg-gray-300 animate-pulse rounded-lg mb-3"></div>
                </div>
            </div>
            <div className='bg-white p-3 rounded-xl border shadow-md w-[380px] transition-transform m-2 xl:m-0 animate-pulse'>
                <div className='flex items-center mb-4'>
                    <div className='w-6 h-6 rounded-lg mr-3 bg-gray-300 animate-pulse'></div>
                    <p className='font-semibold w-14 h-3 bg-gray-300 animate-pulse rounded-lg'></p>
                </div>
                <div>
                    <div className="w-full h-12 bg-gray-300 animate-pulse rounded-lg mb-3"></div>
                    <div className="w-full h-12 bg-gray-300 animate-pulse rounded-lg mb-3"></div>
                    <div className="w-full h-40 bg-gray-300 animate-pulse rounded-lg mb-3"></div>
                </div>
            </div>
            <div className='bg-white p-3 rounded-xl border shadow-md w-[380px] transition-transform m-2 xl:m-0 animate-pulse'>
                <div className='flex items-center mb-4'>
                    <div className='w-6 h-6 rounded-lg mr-3 bg-gray-300 animate-pulse'></div>
                    <p className='font-semibold w-14 h-3 bg-gray-300 animate-pulse rounded-lg'></p>
                </div>
                <div>
                    <div className="w-full h-40 bg-gray-300 animate-pulse rounded-lg mb-3"></div>
                    <div className="w-full h-40 bg-gray-300 animate-pulse rounded-lg mb-3"></div>
                </div>
            </div>
        </div>
    )
}