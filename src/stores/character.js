//router is used as plugin , watch @/main.js
import { defineStore } from "pinia";
import axios from "axios";

export const useCharacterStore = defineStore("character", {
  state: () => ({
    all_characters: [],
    actual_character: [],
    error: {
      active: false,
      message: "",
    },
  }),
  getters: {
    get_actual_character: (state) => state.actual_character,
  },
  actions: {
    setCharacter(character) {
      this.all_characters = character;
      this.actual_character = character;
    },
    filterCharactersBy(status) {
      let filtered = this.all_characters.filter(
        (character) => character.status === status
      );
      this.actual_character = filtered;
    },
    async fetchCharacter(character_to_find) {
      const api_url = "https://rickandmortyapi.com/api/character/?name=";
      try {
        const res = await axios.get(api_url + character_to_find);
        const character = res.data.results;
        this.setCharacter(character);
        this.router.push({
          name: "list-characters",
          params: { name_character: character_to_find },
        });
      } catch (err) {
        // console.log(err) //TODO: do any with this err.message for example
        this.showErrorAlert("check the name entered");
      }
    },

    showErrorAlert(err_message) {
      this.error = { active: true, message: err_message };
      setTimeout(() => {
        this.error = { active: false, message: "" };
      }, 5000);
    },
  },
});
