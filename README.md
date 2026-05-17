## My Project: APOD Explorer

### What I Built

A Next.js application allowing to explore NASA's Astronomy Picture of the Day (APOD).
Today's image is displayed on the home page, and a grid of images arranged by the date they were taken appears below.
Each image links to a detailed page explaining the image.
Favourites can be saved in the Browser with localStorage and can be viewed on the favourites page.

### What I Expected

Both SvelteKit and file-based routing are great, so I had hoped that it would be familiar, coming from SvelteKit that I'm still using.
In the frameworks, pages are defined using folders and files. I thought it would be possible to get data fetching,
The load() functions in +page.server.ts are similar to work in SvelteKit. I also expected
layouts to function in a similar way to +layout.svelte.

### What Actually Happened

Routing was not new to me, but data fetching was — when it comes to Next.js, you write
Remove the load() function and use async directly in the component.
The biggest surprise was that params in dynamic routes needed to be awaited in
The problem that I just encountered with Next.js 16 is that my detail page was crashing until I understood exactly what this was.
It also didn't seem like I'm supposed to have 'use client' at the top of error.tsx.

### The Hardest Part

The most difficult part was to understand why my detail page would always be "not found" when I activated the class.
every date. The API key was loading but params.date was returning:
To fix this, you need to use Next.js 16 or later, which requires params to be awaited before using them.
its properties. A significant amount of time went into this before I discovered the mistake in the
terminal logs.

The list of what I would change if I could.
Before I began working with Next.js 16, I would read through the changelog and get a good understanding of the updates.
The distinction between server and client components is the first of two distinctions. I also would have set up
Externally created the .env.local file and restarted dev server prior to writing any API code.
to prevent misunderstanding of the importance of the fact that the key wasn't loading.

### One Sentence Verdict

Yes, I'd definitely use Next.js again for a app like this because fetching data directly inside the server components, as opposed to client ones, is much cleaner than I thought, but I would read the changelog first to ensure that there aren't any surprises like the params awaiting issue.
