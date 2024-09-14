import { supabase } from "@/lib/supabase";

export default async function getSongs() {
  const { data, error } = await supabase.storage.from("songs").list("son", {});

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  return data;
}
