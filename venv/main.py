import requests
import telebot
from gigachat import GigaChat

bot = telebot.TeleBot('6824920579:AAG3RFCHGkJ8b50B5_8HkFdsMtYUMNHCvwM')

@bot.message_handler(content_types=['text'])
def get_text_messages(message):
    with GigaChat(credentials='Авторизационные данные', verify_ssl_certs=False) as giga:
        response = giga.chat(message.text)
        bot.send_message(message.from_user.id, response.choices[0].message.content)
    bot.polling(none_stop=True, interval=0)
