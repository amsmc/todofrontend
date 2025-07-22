import axios from "axios";
import { create } from "zustand";

const api = import.meta.env.VITE_API_URL;

const TaskController = create((set) => ({
    task: [],
    error: null,
    success: null,

    getTask: async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(`${api}/task/index`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set({ task: response.data.task, error:null });
        } catch (error) {
            const message = error.response.data.message || "Error al obtener las tareas";
            set({ error: message, task:[] });
        }
    },
    clearMessage: () => set({ error: null, success: null }),
}))

// const { task, getTask, storeTask, clearMessage, deleteTask } = TaskController();

// useEffect(() => {
//     const fetchData = async () => {
//         setLoading(true);

//         try {
//             await getTask();
//         } catch (error) {
//             console.error("Gagal mengambil task:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchData();
// }, [getTask]);



// ampun urang aseli 
// storeTask: async (formData, navigate, id = null) => {
//     try {
//         const token = localStorage.getItem("token");
        
//         if (id) {
//             formData.append("_method", "PUT");
//         }

//         const res = await axios.post(
//             id ? `${api}/task/update/${id}` : `${api}/task/store`,
//             formData,
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "multipart/form-data",
//                 },
//             }
//         );

//         set({
//             success: res.data.message,
//             error: null,
//         });
        
//         if (navigate) {
//             navigate("/todo-list");
//         }
//     } catch (err) {
//         const message =
//             err.response?.data?.message ||
//             "Gagal menyimpan task. Silahkan coba lagi";
//         set({ error: message, success: null });
//     }
// },

export default TaskController;