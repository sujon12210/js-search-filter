function filter(){
  const text = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll('#list li');

  items.forEach(item=>{
    const value = item.innerText.toLowerCase();
    item.style.display = value.includes(text) ? 'block' : 'none';
  });
}
