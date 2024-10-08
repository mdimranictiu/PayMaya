function showSectionById(id){
    document.getElementById('show-add-money').classList.add('hidden');
    document.getElementById('show-cashout').classList.add('hidden');
    document.getElementById('show-transaction').classList.add('hidden');
    document.getElementById('show-history').classList.add('hidden');
    document.getElementById('logo').classList.add('hidden');
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
}