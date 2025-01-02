import { createSignal } from 'solid-js';

const App = () => {
    // State untuk menyimpan data dari API
    const [users, setUsers] = createSignal([]);

    const fetchAPI = async () => {
        try {
            const response = await fetch('/api');
            const data = await response.json();
            setUsers(data);  // Set data array ke state
        } catch (error) {
            setUsers([{ name: 'Error', email: 'Error fetching data' }]);  // Menangani error
        }
    };

    return (
        <div class="min-h-screen bg-blue-100 flex items-center justify-center flex-col space-y-5">
            <h1 class="text-4xl font-bold text-blue-600">Hello World!</h1>
            <button
                class="bg-blue-500 px-3 py-2 rounded-md text-white"
                onClick={fetchAPI}
            >
                Show user from API
            </button>
            <div class="mt-5">
                {/* Menampilkan list data user */}
                <ul class="space-y-2">
                    {users().map((user) => (
                        <li key={user.id} class="text-lg text-blue-700">
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
