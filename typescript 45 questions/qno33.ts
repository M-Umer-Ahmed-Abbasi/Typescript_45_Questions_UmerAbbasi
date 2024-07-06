//Ordinal Number Print the Array
let My_array:number[]=[12,65,8,9,19,73,43,27,35,3];
for(let i=1; i<=My_array.length; i++)
{
    if(i==1)
        {
          console.log("1st Ordinal in Array:",My_array[i-1]);
        }else if(i==2)
            {
                console.log("2nd Ordinal in Array:",My_array[i-1]);
            }else if(i==3)
                {
                    console.log("3rd Ordinal in Array:",My_array[i-1]);
                }else{
                    console.log(i+ "th Ordinal in Array:",My_array[i-1]);
                }
}