import React, { useRef } from "react";
import { MyContato, MyButton } from "./style";
import emailjs from "@emailjs/browser";

function Contato() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ah4ddma",
        "template_08p8q6a",
        form.current,
        "20FonHG28nB56-xNb"
      )
      .then(
        (result) => {
          alert("Email enviado com sucesso!");
          form.current.reset();
        },
        (error) => {
          alert("Erro ao enviar: " + error.text);
        }
      );
  };

    return(
        <MyContato>
                <div className="left">
                    <h1>Contato</h1>
                <p>
    Estou sempre aberto a novas oportunidades e ficarei feliz em ouvir suas ideias, responder suas dúvidas ou discutir possíveis colaborações. Se você tem algum projeto em mente ou gostaria de conversar sobre como podemos trabalhar juntos, não hesite em entrar em contato!
    Estou à disposição para esclarecer qualquer questão ou explorar novas possibilidades.
    Aguardo seu contato!
    </p>
                </div>
                <div className="right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="nome" placeholder="Nome" required />
          <input type="text" name="assunto" placeholder="Assunto" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="conteudo" placeholder="Conteúdo" rows="5" required></textarea>
          <MyButton type="submit"><span>Enviar</span></MyButton>
        </form>
      </div>
        </MyContato>

    );
}

export default Contato;