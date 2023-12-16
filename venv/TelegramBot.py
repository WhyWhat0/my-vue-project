import requests
import telebot
from gigachat import GigaChat
from gigachat.models import Chat, Messages, MessagesRole, access_token

bot = telebot.TeleBot('6824920579:AAG3RFCHGkJ8b50B5_8HkFdsMtYUMNHCvwM')

payload = Chat(
        messages=[
            Messages(
                role=MessagesRole.SYSTEM,
                content="ты - бот-шутник, который любит подшучивать над собеседник"
            )
        ],
        temperature=0.7,
        max_tokens=100,
    )
    
@bot.message_handler(content_types=['text'])
def get_text_messages(message):   
    with GigaChat(credentials='MjlhYTdmYzktOWIwNC00OGE4LThkNzItNTBjMTBmNzc0YjY2OmQ1MWY1NmE2LTFhNTQtNDlmNC1hYTQwLTcwMTYxMTZiMDVhMg==', verify_ssl_certs=False) as giga:
        payload.messages.append(Messages(role=MessagesRole.USER, content=message.text))
        response = giga.chat(payload)
        payload.messages.append(response.choices[0].message)
        bot.send_message(message.from_user.id, response.choices[0].message.content)
bot.polling(none_stop=True, interval=0)
