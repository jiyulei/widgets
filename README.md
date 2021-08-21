1. array destructure:
just like object destructure:
---------------------
const name = ["a", "b"];

const [first, second] = name;

first ====> a
second ====> b

----------------------

useState is using this syntax

const [yourState, setterFunctionToUpdateState] = useState(null);
                            ^                         ^
                            |                         |
                  will casue component         default value for state
                  rerender just like 
                  setState in 
                  class based component

-------------------
equals as ==================>

const thisThing = useState(null);

const yourState = thisThing[0];
const setterFunctionToUpdateState = thisThing[1];

--------------------------------

2. useEffect  --> 
which allows functional component to use something like lifecycle method

Configure the hook to run some code automatically in one of three scenarios:
 1. when the component is rendered for the first time only
 2. when the component is rendered for the first time and whenever it rerenders
 3. when the component is rendered for the first time and whenever it rerenders and some pice of data has changed

Syntax:

useEffect( () => {} , secondArgument? );

 1. first argument will always be a function 

 --> cannot mark as async function

 2. second argument always is an array (or optional) 
 ---> controls when the code in first argument gets executed
   
   1. []  
   -------> run at initial render

   2. ..nothing..
   -------> initial render and after every rerender

   3. [data1, data2, ...] 
   -------> initial render and after rerender if data has changed since last render

   -----------------------------

   useEffect(() => {
    console.log('consoles initial and when state changes');
    return () => {
      console.log('this will get consoled in next useEffect get called')
    }
  }, [searchTerm]);


3. setTimeOut returns a TimeId
   
4. Debounce(防抖) --> 把触发很频繁触发的事件合并成一次执行

    useEffect(() => {
      const timeId = setTimeOut(() =>{
        console.log('--initial render and when data changes casuing rerender--');
      }, 1000);

      //  返回值为函数， 在下一次useEffect被call时先执行clearTimeOut，
      若在1000ms之内反复触发，只执行最后一次，实现防抖
    
      return () => {
        clearTimeOut(timeId);
      };
    }, [data]);

  -----------------------------------------

   throttle(节流) --> 保证n毫秒内恒定次数执行

