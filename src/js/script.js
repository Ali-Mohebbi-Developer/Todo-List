const select = document.getElementById("add");
const text = document.getElementById("txt");
const list = document.getElementById("addList");

select.addEventListener("click", () => {
  if (text.value != "") {
    let li = document.createElement("li");
    list.appendChild(li);
    li.className =
      "w-full flex justify-between items-center p-2 my-5 text-xl shadow-custom duration-700";
    li.innerHTML = `  <p class="relative text-white overflow-hidden w-11/12">${text.value}</p>
             <input class="hidden p-2 border-none outline-none rounded-md bg-lightP text-white text-xl">
            <button class="hidden p-2 mx-2 border-none outline-none text-lightP hover:bg-[#b086f847] text-xl" onclick="change(this)">Confirm</button>
            <div class="flex w-1/12 justify-between">
                  <button onclick="_done(this)" class="hover:scale-125 duration-300"><i class="bi bi-check-square text-white hover:text-green-500"></i></button>
                 <button onclick="_edit(this)" class="hover:scale-125 duration-300"><i class="bi bi-pencil-square text-white hover:text-yellow-300"></i></button>
                <button onclick="_del(this)" class="hover:scale-125 duration-300"><i class="bi bi-trash3 text-white hover:text-red-600"></i></button>
            </div>`;
    text.value = "";
    text.focus();
  } else {
    alert("Please Enter Your Task");
  }
});
const _done = (s) =>
  s.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle(
    "done"
  );
const _del = (s) => {
  s.parentElement.parentElement.style.transform = "translateX(1500px)";
  setTimeout(() => {
    s.parentElement.parentElement.remove();
  }, 1000);
};
const _edit = (s) => {
  const button = s.parentElement.previousElementSibling;
  const inp = s.parentElement.previousElementSibling.previousElementSibling;
  const mainText =
    s.parentElement.previousElementSibling.previousElementSibling
      .previousElementSibling;
  button.classList.remove("hidden");
  inp.classList.remove("hidden");
  inp.value = mainText.innerText;
  mainText.innerText = "";
  inp.focus();
  s.disabled = true;
};
const change = (s) => {
  const mainText = s.previousElementSibling.previousElementSibling;
  const inp = s.previousElementSibling;
  mainText.innerText = inp.value;
  s.classList.add('hidden')
  inp.classList.add('hidden')
  s.nextElementSibling.children[1].disabled = false
};
