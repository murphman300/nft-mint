"use client";

import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File>()

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      alert('File required!');
      return;
    }

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (err: any) {
      // Handle errors here
      console.error(err)
    }
  };

  return (
    <main className="flex flex-col gap-y-8 items-center p-24">
      <h2 className="text-4xl font-extrabold">
        Upload CSV below:
      </h2>

      <form onSubmit={onSubmit}>
        <label>
          CSV
          <input
            name="file"
            type="file"
            className="text-white"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
