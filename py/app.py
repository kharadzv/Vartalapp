from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Simple chatbot logic
def get_bot_response(user_message):
    user_message = user_message.lower()

    if "hello" in user_message:
        return "Hello! How can I assist you today?"
    elif "how are you" in user_message:
        return "I'm just a bot, but I'm doing well! How about you?"
    elif "bye" in user_message:
        return "Goodbye! Have a great day!"
    else:
        return "I'm not sure I understand. Try asking something else!"

# Home route to serve the HTML chatbot interface
@app.route("/")
def home():
    return render_template("index.html")

# API route for chatting with the bot
@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    bot_response = get_bot_response(user_message)
    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True, port=21900)  # Port 21900 as requested