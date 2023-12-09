export function usePosts(limit) {
    const fetching = async () => {
        try {
            const response = await axios.get('https://developers.sber.ru/api/gigachat/gigachat/api/client/session_messages,' {
                params: {
                    
                }
            });      
            console.log(response)
        } catch (e) {
            alert('Ошибка')
        } finally {
        }
    }
    onMounted(fetching)
}