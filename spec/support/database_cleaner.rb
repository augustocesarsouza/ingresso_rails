RSpec.configure do |config|
  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation) #truncation deleta os dados da tebela e não a tabela/só banco de dados teste
  end

  config.before(:each) do
    DatabaseCleaner.strategy = :transaction # se der algum erro
  end

  config.before(:each, js: true) do
    DatabaseCleaner.strategy = :transaction
  end

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end
end