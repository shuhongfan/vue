let a=10
let b=20
let c=30
let d=40

function show() {
    console.log('1111111111111111')
}

export default {
    a,
    c,
    show
}

// export default {
//     d
// }

// 按需导出
export let s1='aaa'
export let s2='ccc'
export function say() {
    console.log('sssssssss')
}
