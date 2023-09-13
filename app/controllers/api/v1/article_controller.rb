class Api::V1::ArticleController < ApplicationController
  def index
    recipe = Article.all.order(created_at: :desc)
    render json: article
  end

  def create
  end

  def show
  end

  def destroy
  end
end
