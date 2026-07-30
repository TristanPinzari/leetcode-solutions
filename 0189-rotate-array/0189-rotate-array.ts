function rotate(arr: number[], k: number): void { 
  
const n = arr.length
if(n==0) return 
 k= k%n
if (k== 0) return 

reverse(arr,0,n-1)
reverse(arr,0,k-1)
reverse(arr,k,n-1)
};
function reverse (arr:number[],start:number     , end:number ){
    while(start < end){
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++
        end--
    }
}