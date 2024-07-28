import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "sent" }]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <div className="search-bar">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "start" }}>
            <b>  Message</b>
              <svg
                width="29"
                height="12"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7299 11.3252L16.1354 18.9198C15.2384 19.8167 13.7708 19.8167 12.8739 18.9198L5.2793 11.3252"
                  stroke="black"
                  stroke-width="2.62083"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p
                style={{
                  backgroundColor: "white",
                  marginTop: "-5px",
                  padding: "3px",
                  borderRadius: "100%",
                }}
              >
                12
              </p>
            </div>
            <svg
              style={{ marginTop: "-18px" ,cursor:'pointer'}}
              width="60"
              height="20"
              viewBox="0 0 60 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.0119 0.757324C13.9666 0.757324 0.891602 13.8323 0.891602 29.8777C0.891602 45.923 13.9666 58.998 30.0119 58.998C46.0572 58.998 59.1323 45.923 59.1323 29.8777C59.1323 13.8323 46.0572 0.757324 30.0119 0.757324ZM41.6601 32.0617H32.196V41.5258C32.196 42.7197 31.2059 43.7098 30.0119 43.7098C28.818 43.7098 27.8279 42.7197 27.8279 41.5258V32.0617H18.3638C17.1699 32.0617 16.1798 31.0716 16.1798 29.8777C16.1798 28.6837 17.1699 27.6936 18.3638 27.6936H27.8279V18.2295C27.8279 17.0356 28.818 16.0455 30.0119 16.0455C31.2059 16.0455 32.196 17.0356 32.196 18.2295V27.6936H41.6601C42.854 27.6936 43.8441 28.6837 43.8441 29.8777C43.8441 31.0716 42.854 32.0617 41.6601 32.0617Z"
                fill="#EB638B"
              />
            </svg>
          </div>

          <input type="text" placeholder="Search messages" />
        </div>
        <div className="contact-list">
          <div className="contact selected">
            <img
              src="https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lth9J4HDjhwFr4LPinEoFWepOCI1shKB3LneYJFcNUMUxL391la4AL5M0k139wQkMaegv5qPqaiGfKFRh3KiobLrQJPkF9xfCuHC-qq7uPQpvovOdObpuY73dYW7dwzAfThwQIC6C-WbJYvyKZfjN9m1pKQNfeg6XaBh~3Z5eSy~ojZNk-r0rzcJYbUxuLXgajLn7JnHbpdf0XOCMbNZY0EfETv-rDj4TpQEz6fvmq-gyze1eOuKDBF1z4VTHbfx0FUG4wjQx5B2-qC5WXGZeQdUo7Io3FVaJQpy9Vr8dGlhDd72T5d9j9RJXx8XqT6-USFP9ooITzO7rDAEncGlRw__"
              alt="profile"
              className="contact-pic"
            />
            <div>
              <div className="contact-name">Florencio Dorrance</div>
              <div className="contact-message">woohooo</div>
            </div>
          </div>
          <div className="contact">
            <img
              src="https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lth9J4HDjhwFr4LPinEoFWepOCI1shKB3LneYJFcNUMUxL391la4AL5M0k139wQkMaegv5qPqaiGfKFRh3KiobLrQJPkF9xfCuHC-qq7uPQpvovOdObpuY73dYW7dwzAfThwQIC6C-WbJYvyKZfjN9m1pKQNfeg6XaBh~3Z5eSy~ojZNk-r0rzcJYbUxuLXgajLn7JnHbpdf0XOCMbNZY0EfETv-rDj4TpQEz6fvmq-gyze1eOuKDBF1z4VTHbfx0FUG4wjQx5B2-qC5WXGZeQdUo7Io3FVaJQpy9Vr8dGlhDd72T5d9j9RJXx8XqT6-USFP9ooITzO7rDAEncGlRw__"
              alt="profile"
              className="contact-pic"
            />
            <div>
              <div className="contact-name">Elmer Laverty</div>
              <div className="contact-message">Haha oh man 🔥</div>
            </div>
          </div>
          <div className="contact">
            <img
              src="https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lth9J4HDjhwFr4LPinEoFWepOCI1shKB3LneYJFcNUMUxL391la4AL5M0k139wQkMaegv5qPqaiGfKFRh3KiobLrQJPkF9xfCuHC-qq7uPQpvovOdObpuY73dYW7dwzAfThwQIC6C-WbJYvyKZfjN9m1pKQNfeg6XaBh~3Z5eSy~ojZNk-r0rzcJYbUxuLXgajLn7JnHbpdf0XOCMbNZY0EfETv-rDj4TpQEz6fvmq-gyze1eOuKDBF1z4VTHbfx0FUG4wjQx5B2-qC5WXGZeQdUo7Io3FVaJQpy9Vr8dGlhDd72T5d9j9RJXx8XqT6-USFP9ooITzO7rDAEncGlRw__"
              alt="profile"
              className="contact-pic"
            />
            <div>
              <div className="contact-name">Lavern Laboy</div>
              <div className="contact-message">Haha that's terrifying 😅</div>
            </div>
          </div>
          <div className="contact">
            <img
              src="https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lth9J4HDjhwFr4LPinEoFWepOCI1shKB3LneYJFcNUMUxL391la4AL5M0k139wQkMaegv5qPqaiGfKFRh3KiobLrQJPkF9xfCuHC-qq7uPQpvovOdObpuY73dYW7dwzAfThwQIC6C-WbJYvyKZfjN9m1pKQNfeg6XaBh~3Z5eSy~ojZNk-r0rzcJYbUxuLXgajLn7JnHbpdf0XOCMbNZY0EfETv-rDj4TpQEz6fvmq-gyze1eOuKDBF1z4VTHbfx0FUG4wjQx5B2-qC5WXGZeQdUo7Io3FVaJQpy9Vr8dGlhDd72T5d9j9RJXx8XqT6-USFP9ooITzO7rDAEncGlRw__"
              alt="profile"
              className="contact-pic"
            />
            <div>
              <div className="contact-name">Titus Kitamura</div>
              <div className="contact-message">omg, this is amazing</div>
            </div>
          </div>
          <div className="contact">
            <img
              src="https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lth9J4HDjhwFr4LPinEoFWepOCI1shKB3LneYJFcNUMUxL391la4AL5M0k139wQkMaegv5qPqaiGfKFRh3KiobLrQJPkF9xfCuHC-qq7uPQpvovOdObpuY73dYW7dwzAfThwQIC6C-WbJYvyKZfjN9m1pKQNfeg6XaBh~3Z5eSy~ojZNk-r0rzcJYbUxuLXgajLn7JnHbpdf0XOCMbNZY0EfETv-rDj4TpQEz6fvmq-gyze1eOuKDBF1z4VTHbfx0FUG4wjQx5B2-qC5WXGZeQdUo7Io3FVaJQpy9Vr8dGlhDd72T5d9j9RJXx8XqT6-USFP9ooITzO7rDAEncGlRw__"
              alt="profile"
              className="contact-pic"
            />
            <div>
              <div className="contact-name">Geoffrey Mott</div>
              <div className="contact-message">awww 😍</div>
            </div>
          </div>
          <div className="contact">
            <img
              src="https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lth9J4HDjhwFr4LPinEoFWepOCI1shKB3LneYJFcNUMUxL391la4AL5M0k139wQkMaegv5qPqaiGfKFRh3KiobLrQJPkF9xfCuHC-qq7uPQpvovOdObpuY73dYW7dwzAfThwQIC6C-WbJYvyKZfjN9m1pKQNfeg6XaBh~3Z5eSy~ojZNk-r0rzcJYbUxuLXgajLn7JnHbpdf0XOCMbNZY0EfETv-rDj4TpQEz6fvmq-gyze1eOuKDBF1z4VTHbfx0FUG4wjQx5B2-qC5WXGZeQdUo7Io3FVaJQpy9Vr8dGlhDd72T5d9j9RJXx8XqT6-USFP9ooITzO7rDAEncGlRw__"
              alt="profile"
              className="contact-pic"
            />
            <div>
              <div className="contact-name">Alfonzo Schuessler</div>
              <div className="contact-message">perfect! ✅</div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-window">
        <div className="chat-header">
          <div className="contact-info">
            <img
              src="https://s3-alpha-sig.figma.com/img/9831/0dda/8e5397d8d65f99f13948e7c87237dd3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lth9J4HDjhwFr4LPinEoFWepOCI1shKB3LneYJFcNUMUxL391la4AL5M0k139wQkMaegv5qPqaiGfKFRh3KiobLrQJPkF9xfCuHC-qq7uPQpvovOdObpuY73dYW7dwzAfThwQIC6C-WbJYvyKZfjN9m1pKQNfeg6XaBh~3Z5eSy~ojZNk-r0rzcJYbUxuLXgajLn7JnHbpdf0XOCMbNZY0EfETv-rDj4TpQEz6fvmq-gyze1eOuKDBF1z4VTHbfx0FUG4wjQx5B2-qC5WXGZeQdUo7Io3FVaJQpy9Vr8dGlhDd72T5d9j9RJXx8XqT6-USFP9ooITzO7rDAEncGlRw__"
              alt="profile"
            />
            <div className="contact-name">Florencio Dorrance</div>
          </div>
          <button className="call-button"><svg width="36" height="16" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7264 23.0435L13.494 26.2758C12.8126 26.9573 11.7294 26.9573 11.0305 26.2933C10.8383 26.1011 10.6461 25.9264 10.4539 25.7342C8.68704 23.9555 7.05746 22.0456 5.57914 20.0208C4.14642 18.029 2.99325 16.0371 2.15459 14.0628C1.3334 12.0709 0.914062 10.1665 0.914062 8.34937C0.914062 7.16126 1.12373 6.02557 1.54306 4.97724C1.96239 3.91143 2.62634 2.93299 3.55236 2.05938C4.67058 0.95863 5.89364 0.416992 7.18658 0.416992C7.6758 0.416992 8.16502 0.521825 8.60183 0.731492C9.05611 0.941158 9.45797 1.25566 9.77247 1.70993L13.826 7.42334C14.1405 7.86015 14.3677 8.26201 14.5249 8.6464C14.6822 9.01331 14.7695 9.38023 14.7695 9.7122C14.7695 10.1315 14.6472 10.5509 14.4026 10.9527C14.1755 11.3546 13.8435 11.7739 13.4242 12.1933L12.0963 13.5736C11.9041 13.7657 11.8167 13.9929 11.8167 14.2724C11.8167 14.4122 11.8342 14.5345 11.8691 14.6743C11.9215 14.8141 11.974 14.9189 12.0089 15.0237C12.3234 15.6003 12.865 16.3516 13.6338 17.2602C14.4201 18.1687 15.2587 19.0948 16.1673 20.0208C16.342 20.1955 16.5342 20.3702 16.7089 20.545C17.4078 21.2264 17.4253 22.3446 16.7264 23.0435V23.0435ZM35.806 28.9491C35.8037 29.6085 35.6545 30.2591 35.3692 30.8536C35.0722 31.4826 34.6878 32.0766 34.1811 32.6357C33.325 33.5792 32.3815 34.2606 31.3157 34.6974C31.2982 34.6974 31.2807 34.7149 31.2633 34.7149C30.2324 35.1342 29.1142 35.3614 27.9086 35.3614C26.1264 35.3614 24.222 34.942 22.2127 34.0859C20.2034 33.2298 18.1941 32.0766 16.2022 30.6264C15.5208 30.1197 14.8394 29.613 14.1929 29.0714L19.9063 23.358C20.3956 23.7249 20.8324 24.0045 21.1993 24.1966C21.2866 24.2316 21.3915 24.284 21.5138 24.3364C21.6536 24.3888 21.7933 24.4063 21.9506 24.4063C22.2476 24.4063 22.4748 24.3015 22.6669 24.1093L23.9948 22.7989C24.4316 22.3621 24.851 22.0301 25.2528 21.8204C25.6547 21.5758 26.0565 21.4535 26.4934 21.4535C26.8253 21.4535 27.1748 21.5234 27.5592 21.6807C27.9435 21.8379 28.3454 22.065 28.7822 22.3621L34.5655 26.468C35.0198 26.7825 35.3343 27.1494 35.5265 27.5863C35.7012 28.0231 35.806 28.4599 35.806 28.9491V28.9491Z" fill="#EB638B"/>
</svg>
Call</button>
        </div>
        <div className="chat-messages">
          <div className="message received">
            omg, hlkhkjhkjh j jhljhjhk jhklj hkhljkhjjkhl jhlkjh jkhthis is
            amazing
          </div>
          <div className="message received">perfect! ✅</div>
          <div className="message received">Wow, this is really epic</div>
          <div className="message sent">
            <p>How are you?</p>
          </div>
          <div className="message received">just ideas for next time</div>
          <div className="message received">I'll be there in 2 mins 🕒</div>
          <div className="message sent">
            <p>How are you?</p>
          </div>
          <div className="message sent">
            <p>How are you?</p>
          </div>
          <div className="message sent">
            <p>How are you?</p>
          </div>
          <div className="message received">awww 😍</div>
          <div className="message received">omg, this is amazing</div>
          <div className="message received">woohooo 🔥</div>
        </div>
        <div className="message-input">
          <svg
            className="svg1"
            width="43"
            height="30"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8477 21.6068V27.7221C21.8477 31.0942 24.5909 33.8373 27.963 33.8373C31.3351 33.8373 34.0783 31.0942 34.0783 27.7221V18.1124C34.0783 11.3506 28.6095 5.88184 21.8477 5.88184C15.086 5.88184 9.61719 11.3506 9.61719 18.1124V28.5957C9.61719 34.379 14.3172 39.079 20.1005 39.079"
              stroke="black"
              stroke-width="2.62083"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input type="text" placeholder="Type a message" />
          <svg
            className="sendsvg"
            width="43"
            height="30"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.3898 5.81203L12.6124 11.0537C2.0068 14.6005 2.0068 20.3838 12.6124 23.9132L17.295 25.4682L18.85 30.1508C22.3794 40.7564 28.1801 40.7564 31.7095 30.1508L36.9687 14.3909C39.3099 7.31464 35.4661 3.45328 28.3898 5.81203ZM28.9489 15.2121L22.3095 21.8864C22.0474 22.1485 21.7154 22.2708 21.3835 22.2708C21.0515 22.2708 20.7195 22.1485 20.4574 21.8864C20.2137 21.6398 20.0771 21.3071 20.0771 20.9604C20.0771 20.6137 20.2137 20.281 20.4574 20.0344L27.0969 13.36C27.6036 12.8533 28.4422 12.8533 28.9489 13.36C29.4556 13.8667 29.4556 14.7054 28.9489 15.2121Z"
              fill="#EB638B"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Chat;
