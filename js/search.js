const search = function () {
  const input = document.querySelector(".search-block > input");
  const searchBtn = document.querySelector(".search-block > button");
  
    searchBtn.addEventListener('click', (event) => {
        const inputValue = input.value;
        console.log(inputValue);
    });
};
search();
