/*
 * minimal counter app state
 *
 * In this case, our app state is simply a single number (the counter). But we
 * put it here because in the future, when our state is more complicated
 *
 */

export interface Data {
  id: number;
  text?: string;
  completed?: boolean;
}

export interface AppState {
  data?: Data;
  counter: number;
}

