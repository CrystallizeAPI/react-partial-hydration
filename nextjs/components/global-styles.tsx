export function GlobalStyles() {
  return (
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html: `
        html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
					font-size: 18px;
					line-height: 1.5;
				}
				
				a {
					color: inherit;
					text-decoration: none;
				}

				a:hover {
					text-decoration: underline;
				}
				
				* {
					box-sizing: border-box;
				}

				button {
					background: purple;
					color: #fff;
					appearance: none;
					border: none;
					padding: 15px 25px;
					border-radius: 4px;
					font-size: 1.5rem;
					cursor: pointer;
				}

				button:active {
					transform: scale(0.95);
				}
				
				main {
					padding: 20px;
				}

				h1 {
					margin: 1rem 0 2rem;
				}

				.page-content {
					max-width: 800px;
					margin: 0 auto;
				}

				.page-content figure {
					margin: 0 0 3rem;
				}

				.page-content img {
					width: 100%;
					height: auto;
					display: block;
				}

				.page-content section {
					margin-top: 3rem;
				}

				.page-content p {
					margin: 1.5rem 0;
				}

				.page-content pre {
					max-height: 500px;
					overflow: auto;
					padding: 1.5rem !important;
					font-size: .8rem;
					border: 3px solid #0002;
					border-radius: 3px;
				}
  `,
      }}
    />
  );
}
