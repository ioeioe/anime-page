import { AnnounceTypes } from "./announce.types";

export const toggleAnnounceHidden = () => ({
  type: AnnounceTypes.TOGGLE_ANNOUNCE_HIDDEN,
});

export const closingAnnounce = () => ({
  type: AnnounceTypes.CLOSING_ANNOUNCE,
});

export const showingAnnounce = (announceInfo) => ({ 
  type: AnnounceTypes.SHOWING_ANNOUNCE,
  payload:announceInfo,
});
