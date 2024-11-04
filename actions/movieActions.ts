"use server";

import { createServerSupabaseClient } from "utils/supabase/server";

function handleError(error) {
  if (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllMovies() {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("movie").select("*");

  handleError(error);

  return data;
}

export async function searchMovies({ search = "", page, pageSize }) {
  const supabase = await createServerSupabaseClient();

  const { data, count, error } = await supabase
    .from("movie")
    .select("*")
    .like("title", `%${search}%`)
    .range((page - 1) * pageSize, page * pageSize - 1);
  const hasNextPage = count > page * pageSize - 1;
  handleError(error);
  return { data, page, pageSize, hasNextPage };
}
export async function getMovie(id) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .eq("id", id)
    .maybeSingle(); // One or Null

  handleError(error);

  return data;
}
