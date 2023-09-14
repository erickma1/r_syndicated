9.times do |i|
    Article.create(
      headline: "Article #{i + 1}",
      main_text: '227g tub clotted cream, 25g butter, 1 tsp cornflour,100g parmesan, grated nutmeg, 250g fresh fettuccine or tagliatelle, snipped chives or chopped parsley to serve (optional)',
      section: 1
    )
  end