/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        backcolor:"var(--backcolor)",
        headcolor:"var(--headcolor)",
        hoverbuttoncolor:"var(--hoverbuttoncolor)",
        fontcolor:"var(--fontcolor)",
        contback:"var(--contback)",
      },
      brightness:{
        bright:"var(--bright)",   
      },
      boxShadow:{
        shadow:"var(--shadow)",
      },
      fontFamily:{
        spacemono: ["Space Mono", "monospace"]
      }
    },
  },
  plugins: [],
}

