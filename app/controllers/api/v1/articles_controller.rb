class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: %i[show destroy]
  def index
    article = Article.all.order(created_at: :desc)
    render json: article
  end

  def news
    articles = Article.where(section: 1).order(created_at: :desc).limit(3)
    render json: articles
  end

  def mostread
    articles = Article.where(section: 1).order(created_at: :desc).limit(5)
    render json: articles
  end

  def create
    article = Article.create!(article_params)
    if article
      render json: article
    else
      render json: article.errors
    end
  end

  def show
    if article
      render json: article
    else
      render json: article.errors
    end
  end

  def max_id
    max_id = Article.maximum(:id)
    max_article = Article.find_by(id: max_id)

    if max_article
      render json: max_article
    else
      render json: { error: 'No articles found.' }, status: :not_found
    end
  end

  def destroy
    @article&.destroy
    render json: { message: 'Article deleted!' }
  end

  private

  def article_params
    params.permit(:headline, :main_text, :section, :image)
  end

  def set_article
    @article = Article.find(params[:id])
  end

  def article
    @article ||= Article.find(params[:id])
  end

end
