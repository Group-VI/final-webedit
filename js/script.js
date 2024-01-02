const data = [
    { name: 'ນ້ຳຝົນ', age: 21, city: 'ສີສະລາດ' },
    { name: 'ແສງ', age: 20, city: 'ວຽງຈັນ' },
    { name: 'ເມດຕາ', age: 19, city: 'ໂພນສະລາດ' },

];


function performSearch() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; 
	
	// thar br porn khr moun 
    if (searchInput === '') {
        resultContainer.textContent = 'Please enter a search term.';
        return;
    }
	
    if (!data || data.length === 0) {
        resultContainer.textContent = 'No data to search.';
        return;
    }
	
    const matchingData = data.filter(item => {
        return Object.values(item).some(value =>
            value.toString().toLowerCase().startsWith(searchInput)
        );
    });
	// thar khr moun mi 
    if (matchingData.length > 0) {
        const table = document.createElement('table');
        table.innerHTML = `
            <tr>
                <th>ຊື່</th>
                <th>ອາຍຸ</th>
                <th>ບ້ານ</th>
            </tr>
        `;

        matchingData.forEach(item => {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.textContent = item.name;
            cell2.textContent = item.age;
            cell3.textContent = item.city;
        });

        resultContainer.appendChild(table);
    } else {
        // thar br mi khr moun 
        resultContainer.textContent = 'No matching results found.';
    }
}
