<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Interfaces](#interfaces)
  - [Interface: Character](#interface-character)
    - [Table of contents](#table-of-contents)
    - [Properties](#properties)
- [rick-and-morty-front-end](#rick-and-morty-front-end)
  - [Table of contents](#table-of-contents-1)
    - [Modules](#modules)
- [Modules](#modules-1)
  - [Module: App](#module-app)
    - [Table of contents](#table-of-contents-2)
    - [Functions](#functions)
  - [Module: main](#module-main)
  - [Module: types](#module-types)
    - [Table of contents](#table-of-contents-3)
    - [Type Aliases](#type-aliases)
  - [Module: vite-env](#module-vite-env)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

rick-and-morty-front-end / [Modules](#modulesmd)

# Interfaces


<a name="interfacestypescharactermd"></a>

[rick-and-morty-front-end](#readmemd) / [Modules](#modulesmd) / [types](#modulestypesmd) / Character

## Interface: Character

[types](#modulestypesmd).Character

Represents a character in the Rick and Morty universe.

### Table of contents

#### Properties

- [gender](#gender)
- [name](#name)
- [species](#species)
- [status](#status)
- [type](#type)

### Properties

#### gender

• **gender**: [`gender`](#gender)

##### Defined in

[types.ts:35](https://github.com/nahuelRosas/rick-and-morty-frontend/blob/1a6f819/src/types.ts#L35)

___

#### name

• **name**: `string`

##### Defined in

[types.ts:32](https://github.com/nahuelRosas/rick-and-morty-frontend/blob/1a6f819/src/types.ts#L32)

___

#### species

• **species**: [`species`](#species)

##### Defined in

[types.ts:34](https://github.com/nahuelRosas/rick-and-morty-frontend/blob/1a6f819/src/types.ts#L34)

___

#### status

• **status**: [`status`](#status)

##### Defined in

[types.ts:33](https://github.com/nahuelRosas/rick-and-morty-frontend/blob/1a6f819/src/types.ts#L33)

___

#### type

• **type**: `string`

##### Defined in

[types.ts:36](https://github.com/nahuelRosas/rick-and-morty-frontend/blob/1a6f819/src/types.ts#L36)


<a name="modulesmd"></a>

[rick-and-morty-front-end](#readmemd) / Modules

# rick-and-morty-front-end

## Table of contents

### Modules

- [App](#modulesappmd)
- [main](#modulesmainmd)
- [types](#modulestypesmd)
- [vite-env](#modulesvite_envmd)

# Modules


<a name="modulesappmd"></a>

[rick-and-morty-front-end](#readmemd) / [Modules](#modulesmd) / App

## Module: App

### Table of contents

#### Functions

- [default](#default)

### Functions

#### default

▸ **default**(): `Element`

Renders the main application component.

##### Returns

`Element`

The JSX element representing the App component.

##### Defined in

[App.tsx:12](https://github.com/nahuelRosas/rick-and-morty-frontend/blob/1a6f819/src/App.tsx#L12)


<a name="modulesmainmd"></a>

[rick-and-morty-front-end](#readmemd) / [Modules](#modulesmd) / main

## Module: main


<a name="modulestypesmd"></a>

[rick-and-morty-front-end](#readmemd) / [Modules](#modulesmd) / types

## Module: types

### Table of contents

#### Interfaces

- [Character](#interfacestypescharactermd)

#### Type Aliases

- [gender](#gender)
- [species](#species)
- [status](#status)

### Type Aliases

#### gender

Ƭ **gender**: ``"Male"`` \| ``"Female"`` \| ``"Genderless"`` \| ``"Unknown"`` \| ``""``

Represents the gender of a character.
Possible values are 'Male', 'Female', 'Genderless', 'Unknown', or an empty string.

##### Defined in

[types.ts:21](https://github.com/nahuelRosas/rick-and-morty-frontend/blob/1a6f819/src/types.ts#L21)

___

#### species

Ƭ **species**: ``"Human"`` \| ``"Alien"`` \| ``"Humanoid"`` \| ``"Unknown"`` \| ``"Mythological Creature"`` \| ``"Poopybutthole"`` \| ``"Animal"`` \| ``"Robot"`` \| ``"Cronenberg"`` \| ``"Disease"`` \| ``""``

Represents the species of a character in the Rick and Morty universe.

##### Defined in

[types.ts:4](https://github.com/nahuelRosas/rick-and-morty-frontend/blob/1a6f819/src/types.ts#L4)

___

#### status

Ƭ **status**: ``"Alive"`` \| ``"Dead"`` \| ``"Unknown"`` \| ``""``

Represents the status of a character.
Possible values are 'Alive', 'Dead', 'Unknown', or an empty string.

##### Defined in

[types.ts:26](https://github.com/nahuelRosas/rick-and-morty-frontend/blob/1a6f819/src/types.ts#L26)


<a name="modulesvite_envmd"></a>

[rick-and-morty-front-end](#readmemd) / [Modules](#modulesmd) / vite-env

## Module: vite-env
