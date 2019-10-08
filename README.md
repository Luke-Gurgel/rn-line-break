## React Native Line Break

Possibly the smallest react-native package on npm, this is just a component that facilitates adding new lines.

It is literally 3 lines long. It ain't much, but it's honest work.

Before, if you wanted to display some long text, with line breaks in it, this is how you might have done it:

```jsx
<Text>
  This is pretty
  {'\n\n'}
  ugly, that's what it is.
</Text>
```

You could also assign the text to a variable and render it, like so:

```jsx
const message = `This is also just...\n\n not great.`

<Text>{message}</Text>
```

It gets worse with nested `Text` components...

```jsx
<Text>
  <Text>
    Just another example, but this one includes <BoldText>nested text</BoldText>
    {'\n\n'}Nesting text is also not a lot of fun, especially when you need line breaks.
  </Text>
</Text>
```

You get the point, this is kinda annoying. Let's make this better.

Run `npm i rn-line-break` to install the package.

```jsx
import Break from 'rn-line-break'

<Text>
  Here is some text.
  <Break />
  Here is more text.
</Text>
```

Beautiful, right?

`<Break />` adds a single `\n` by default, but that can be specified with the `lines` prop, like so:

```jsx
import Break from 'rn-line-break'

<Text>
  Here is some text.
  <Break lines={4} />
  Here is more text.
</Text>
```

That's it. Cheers.
