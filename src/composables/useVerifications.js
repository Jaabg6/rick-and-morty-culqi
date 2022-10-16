import { ref } from "vue";
import { useCharacterStore } from "@/stores/character";
import { storeToRefs } from "pinia";

export function useVerifications_character() {
  let character_to_find = ref("");
  const store = useCharacterStore();
  const { error } = storeToRefs(store);

  // functions
  function FindAnCharacter(character_to_find) {
    const isValid = VerifyString(character_to_find);
    if (isValid) {
      store.fetchCharacter(character_to_find);
    } else {
      store.showErrorAlert("try some text between 4-20 charapters");
    }
  }

  function VerifyString(string) {
    // check if is string of letters and spaces
    let letters = /^[A-Za-z\s]*$/;
    if (!string.match(letters)) return false;
    //check if string is higger tan 4 letters and lower than 20 letters
    if (string.length < 4 || string.length > 20) return false;
    //if pass any checks is valid
    return true;
  }

  function showErrorAlert(err_message) {
    store.showErrorAlert(err_message);
  }

  return {
    FindAnCharacter,
    VerifyString,
    showErrorAlert,
    character_to_find,
    store,
    error,
  };
}
