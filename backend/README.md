# How to run backend application

### 1. venv settings
Для работы с виртуальной средой в Python применяется встроенный модуль venv. Прежде всего перейдем в терминале/командной строке в этот каталог с помощью команды cd.

**cd C:\django**

Затем для создания виртуальной среды выполним следующую команду:

**python -m venv .venv**

После этого в текущей папке (C:\django) будет создан подкаталог ".venv".

### 2. venv activation

Для использования виртуальную среду надо активировать. Например, активируем выше созданную среду, которая располагается в текущем каталоге в папке .venv.

Windows:

**.venv\Scripts\activate.bat**

Linux / MacOS:

**source .venv/bin/activate**

### 3. Django installation

После активации виртуальной среды для установки Django выполним в консоли следующую команду:

**python -m pip install Django**

### 4. Socket packages

Для исправной работы с web-socket необходимо импортировать библиотеку для загрузки пары ключ-значение:

**python -m pip install python-dotenv**

И далее прописать в _settings.py_:

**from dotenv import load_dotenv**

### 5. Running the server

После установки Django можно запускать сервер проекта. Необходимо перейти в папку, в которой находится файл _manage.py_, а затем запустить сервер командой.

**cd tsp**

**python manage.py runserver**

В консоли появится ссылка на хост, по которой и запущен сервер.