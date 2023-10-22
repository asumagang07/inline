export const navStyles = {
    rootCls: {
        base: 'fixed z-10 top-0 w-full h-16 px-24  flex items-center justify-between text-white border-b border-gray-700 backdrop-blur-sm'
    },
    
    logoCls:{
        wrapper: 'flex items-center justify-center gap-1 text-lg',
        logoText:{
            base: 'border w-8 flex items-center justify-center font-semibold rounded-sm',
            theme: {
                light:   'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500',
                dark : 'bg-black'
            }
        }
        
        
      
    },
    navCls:{
        wrapper: 'flex gap-8 items-center',
        switchCls: {
            label: 'relative inline-flex items-center  cursor-pointer',
            switch: `w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`
        }
    }
}