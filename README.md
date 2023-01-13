# Form Builder Example Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that fetches data from [Payload CMS](https://payloadcms.com).

This example repo was made explicitly to demonstrate the power and convenience of the [Form-Builder plugin](https://github.com/payloadcms/plugin-form-builder). Along with the `Form-Builder plugin`, this repo takes advantage of the popular [React Hooks Form](https://react-hook-form.com/) library for easy validation, giving users an easy way to build and manage forms.

## Getting Started

### Payload CMS

First you'll need a running CMS. If you have not done so already, [clone the CMS repo](https://github.com/payloadcms/form-builder-example-cms) and follow the setup instructions. Take note of your server URL, you'll need this in the next step.

### Next.js App

First, get your environment setup:

1. First copy the example `.env` file as your own:
   ```bash
     cp .env.example .env
   ```
1. Then open the `.env` file and paste your Payload server URL:
   ```bash
     NEXT_PUBLIC_CMS_URL=http://localhost:8000
   ```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Once running, you will find a few seeded example forms on your local environment. Give them a try!

You can also start editing the pages by modifying the documents within your CMS.

## Learn More

To learn more about PayloadCMS and Next.js, take a look at the following resources:

- [Payload CMS Documentation](https://payloadcms.com/docs) - learn about Payload CMS features and API.
- [Form Builder Plugin Documentation](https://github.com/payloadcms/plugin-form-builder) - learn about the plugin's features.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Payload CMS GitHub repository](https://github.com/payloadcms/payload/) as well as [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Payload CMS deployment documentaton](https://payloadcms.com/docs/production/deployment) or the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
