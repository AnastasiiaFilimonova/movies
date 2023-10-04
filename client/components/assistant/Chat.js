import { useState } from "react";
import {useRouter} from "next/router"
const dGenres = {
  комеди: "Comedy",
  боевик: "Action",
  драм: "Drama",
};
const t = (word) => {
  const dWords = {
    Comedy: "комедия",
    Action: "боевик",
  };
  return dWords[word] || word;
};
const yearRegex = /(19|20)[0-9]{2}/gm;
const context = { question: null };
const getBotMessage = (text, search) => {
  if (text === "да") {
    if (context.question) {
      search(context.question);
      return "Начинаю поиск, подождите!";
    } else {
      return "Что-да?";
    }
  }
  let result = "";
  const genres = [];
  for (const word in dGenres) {
    if (text.includes(word)) {
      genres.push(dGenres[word]);
    }
  }
  let years = [];
  if (yearRegex.test(text)) {
    years = text.match(yearRegex);
    result += `Вы ищите годы: ${years.join(", ")}?\n`;
  }
  if (genres.length > 0) {
    result += `Вы ищите жанры: ${genres.map(t).join(", ")}?\n`;
  }
  if (result) {
    context.question = {};
    if (genres.length > 0) {
      context.question.genres = genres;
    }
    if (years.length > 0) {
      context.question.years = years;
    }
    return result;
  }
  return "Я вас не понял";
};
const Chat = () => {
  const [opened, setOpened] = useState(false);
  const [messages, setMessages] = useState([]);
  const router = useRouter();
  const search = (question) => {
    let url = "/?";
    if (question.genres) {
      url += `genre=${question.genres[0]}&`;
    }
    if (question.years) {
      url += `year=${question.years[0]}&`;
    }
    router.push(url);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.message.value);
    addUserMessage(e.target.message.value);
    addBotMessage(getBotMessage(e.target.message.value, search));
    e.target.message.value = "";
  };
  const addUserMessage = (text) => {
    const message = {
      sender: "user",
      text: text,
    };
    setMessages((messages) => [...messages, message]);
  };
  const addBotMessage = (text) => {
    const message = {
      sender: "bot",
      text: text,
    };
    setMessages((messages) => [...messages, message]);
  };
  return (
    <div className="assistant">
      <div className="d-flex">
        <div className="logo" onClick={() => setOpened(true)}>
          logo
        </div>
        <div className="message">Здравствуйте! Могу я чем-то Вам помочь?</div>
      </div>
      {opened && (
        <div>
          {messages.map((m, i) => {
            const classes = ["p-2", "mb-3", "alert", "alert-info"];
            if (m.sender === "user") {
              classes.push("text-right");
            }
            return (
              <div key={i} className={classes.join(" ")}>
                <span className="">{m.text}</span>
              </div>
            );
          })}
          <form className="p-2 text-right" onSubmit={onSubmit}>
            <textarea name="message" className="w-100" />
            <button className="btn btn-success" type="submit">
              отправить
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
