import functionlist from './functionlist';

const tibetsheets_function = {};

for (let i = 0; i < functionlist.length; i++) {
    let func = functionlist[i];
    tibetsheets_function[func.n] = func;
}

window.tibetsheets_function = tibetsheets_function; //挂载window 用于 eval() 计算公式

export default tibetsheets_function;
